import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "./redux/AppReducer/selectors.js";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';


// components
import TableContainer from './components/TableContainer';
import Checklist from "./components/Checklist";
import Text from "./components/Text/Text";


// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// services
import { SelectColumnFilter } from './services/filters';
import { getData } from "./api/apiData";
import { useData } from "./hooks/useData";


const App = () => {
  const [data, setData] = useState([]);
  const language = useSelector(selectLanguage);

  const dispatch = useDispatch();

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const body = await response.json();
      const contacts = body.results;
      getData(dispatch);
      // console.log(contacts);
      setData(contacts);
    };
    doFetch();
  }, []);

  useData();

  const renderRowSubComponent = (row) => {
    const {
      name: { first, last },
      location: { city, street, postcode },
      picture,
      cell,
    } = row.original;
    return (
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <CardImg top src={picture.large} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <strong>{`${first} ${last}`} </strong>
          </CardTitle>
          <CardText>
            <strong>Phone</strong>: {cell} <br />
            <strong>Address:</strong>{' '}
            {`${street.name} ${street.number} - ${postcode} - ${city}`}
          </CardText>
        </CardBody>
      </Card>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: 'expander', // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      {
        Header: 'Title',
        accessor: 'name.title',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'First Name',
        accessor: 'name.first',
      },
      {
        Header: 'Last Name',
        accessor: 'name.last',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'City',
        accessor: 'location.city',
      },
      {
        Header: 'Hemisphere',
        accessor: (values) => {
          const { latitude, longitude } = values.location.coordinates;
          const first = Number(latitude) > 0 ? 'N' : 'S';
          const second = Number(longitude) > 0 ? 'E' : 'W';
          return first + '/' + second;
        },
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
        Cell: ({ cell }) => {
          const { value } = cell;

          const pickEmoji = (value) => {
            let first = value[0]; // N or S
            let second = value[2]; // E or W
            const options = ['⇖', '⇗', '⇙', '⇘'];
            let num = first === 'N' ? 0 : 2;
            num = second === 'E' ? num + 1 : num;
            return options[num];
          };

          return (
            <div style={{ textAlign: 'center', fontSize: 18 }}>
              {pickEmoji(value)}
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <Container style={{ marginTop: 100 }}>
      <Text language={language} />
      <Checklist />
        {/*<TableContainer*/}
        {/*  columns={columns}*/}
        {/*  data={data}*/}
        {/*  renderRowSubComponent={renderRowSubComponent}*/}
        {/*/>*/}
    </Container>
  );
};

export default App;
