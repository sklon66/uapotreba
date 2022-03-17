import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import Checklist from "../../components/Checklist";
import Legend from "../../components/Legend";
import About from "../../components/About";

// styles
import styles from './HomeContainer.module.css'

// redux
import { setCurrentRegion } from "../../redux/AppReducer/actions";
import { selectActiveProduct, selectData, selectNeedsObject } from "../../redux/AppReducer/selectors";

// translation
import {KEYS_EN} from "../../locales/translationEn";

// img
import dots from "../../assets/img/dots.svg"
import criticalIco from './img/criticalIco.png'

// helpers
import { sortFromHighestToLowestPriorityByProperty } from "../../services/helpers";

const sortByCategory = (data, category) => {
    if (category === "all") return data;
    if (typeof category === "string") category = [category];
    const returnedArr = [];
    for (let index = 0; index < data.length; index++) {
        const r = { ...data[index] };
        if (category.lenth === 0) return r;
        let regNeedVolume1D = 0;
        r.cities = r.cities.map((c) => {
            let cityNeedVolume1D = 0;
            c.needs = c.needs.map((n) => {
                if (category.find(e => e === n.name)) {
                    cityNeedVolume1D += n.productNeedVolume1D;
                    return n;
                }
                return n;
            })
            regNeedVolume1D += cityNeedVolume1D;
            c.cityNeedVolume1D = cityNeedVolume1D;
            return c;
        });
        r.regNeedVolume1D = regNeedVolume1D;
        returnedArr.push(r);
    }
    return returnedArr;
}

function HomeContainer () {
    const data = useSelector(selectData);
    const activeProduct = useSelector(selectActiveProduct);
    const needsObject = useSelector(selectNeedsObject);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sortedData, setSortedData] = useState(data);
    const [isMobile, setIsMobile] = useState(null);

    const dataSorted = sortByCategory(data, activeProduct);

    useEffect(() => {
        setIsMobile(window.innerWidth < 375)
    }, [])

    const indicatorIco = isMobile ? criticalIco : dots;

    useEffect(() => {
        if (activeProduct === 'all') {
            const sorted = sortFromHighestToLowestPriorityByProperty(data, 'regionNeed');
            setSortedData(sorted);
        } else {
            const regionObjectWithNeeds = dataSorted.map((item, i) => {
                return Object.assign({}, item, needsObject?.find((v) => v.region === item.region))
            });
            setSortedData(regionObjectWithNeeds)
        }
    },[data, activeProduct, needsObject]);


    const onRowClickHandler = (region) => {
        dispatch(setCurrentRegion(region));

        navigate(`/region-${KEYS_EN[region]}`);
    }

    return (
        <>
            <Legend/>

            <div className={styles.homeContainer}>
                <div className={styles.titlesContainer}>
                    <h1 className={styles.title}>
                        <Text text='humanitarian_help' />
                    </h1>
                    <h4 className={styles.disclaimer}>
                        <Text text='about_service' />
                    </h4>
                    <h2 className={styles.subtitle}>
                        <Text text='regions_needs' />
                    </h2>
                    <p className={styles.subtitleDisclaimer}>
                        <img className={styles.disclaimerDots} alt='dots'src={indicatorIco}/>
                        <div className={styles.subtitleDisclaimerTextWrapper}>
                            <Text text='criticality_lev'/>
                        </div>
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.filterContainer}>
                        <div className={styles.filterHeading}>
                            <Text text='product_search' />
                        </div>
                        <Checklist />
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableHeadingDesktop}>
                            <Text text='region'/>
                            <Text text='criticality'/>
                            <Text text='1d_need'/>
                            <Text text='opt_need'/>
                            <Text text='contact'/>
                        </div>
                        <div className={styles.tableHeadingMobile}>
                            <div className={styles.titleGroup}>
                                <Text text='region'/>
                                <Text text='criticality'/>
                            </div>
                            <div className={styles.titleGroup}>
                                <Text text='1d_need'/>
                                <Text text='opt_need'/>
                            </div>
                        </div>
                        <Table withContact isClick iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                    </div>
                </div>
                <About />
            </div>
        </>

    );
};

export default HomeContainer;
