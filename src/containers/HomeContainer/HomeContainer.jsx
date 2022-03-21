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
import {selectActiveProduct, selectData, selectIsLoader} from "../../redux/AppReducer/selectors";

// translation
import {KEYS_EN} from "../../locales/translationEn";

// img
import dots from "../../assets/img/dots.svg"
import criticalIco from './img/criticalIco.png'

// helpers
import { sortFromHighestToLowestPriorityByProperty, filterByCategory } from "../../services/helpers";
import Loader from "../../components/Loader";

function HomeContainer () {
    const data = useSelector(selectData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sortedData, setSortedData] = useState(data);
    const [isMobile, setIsMobile] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('all');


    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    useEffect(() => {
        const dataFiltered = filterByCategory(data, currentCategory);

        const sorted = sortFromHighestToLowestPriorityByProperty(dataFiltered, 'regionNeed');

        setSortedData(sorted);
    },[currentCategory]);

    const indicatorIco = isMobile ? criticalIco : dots;

    const onRowClickHandler = (region) => {
        dispatch(setCurrentRegion(region));

        navigate(`/region-${KEYS_EN[region]}`);
    }

    const isLoader = useSelector((state) => state.app.isLoader);

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
                        <Checklist setCurrentCategory={setCurrentCategory}/>
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
                            <div className={styles.titleDevider}>
                                <Text text='region'/>
                            </div>
                            <Text text='need_in_tons'/>
                            <Text text='criticality'/>
                        </div>
                        {(isLoader && !data) ? <Loader /> : <Table withContact isClick iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>}
                    </div>
                </div>
                <About />
            </div>
        </>

    );
};

export default HomeContainer;
