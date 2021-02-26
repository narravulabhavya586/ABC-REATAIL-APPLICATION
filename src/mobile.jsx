import './App.css';
import React, { useState } from 'react';
import { Form, ButtonGroup, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
const Mobile = () => {
    const cityList = [
        {
            id: 1,
            city: "Usa",
            code: "+16"

        },
        {
            id: 2,
            city: "canada",
            code: "+81"

        },
        {
            id: 3,
            city: "Brazil",
            code: "+65"

        },
        {
            id: 4,
            city: "China",
            code: "+1684"

        },

        {
            id: 5,
            city: "Germany",
            code: "+49"

        },
        {
            id: 6,
            city: "Denmark",
            code: "+45"

        },
        {
            id: 7,
            city: "Egypt",
            code: "+20"

        },
        {
            id: 8,
            city: "Finland",
            code: "+358"

        },
        {
            id: 9,
            city: "India",
            code: "+91"

        },
        {
            id: 10,
            city: "Pakistan",
            code: "+92"

        },

    ]

    const [dropDownVal, setdropDownVal] = useState(`${cityList[0].code}`);
    const [selDrop, setselDrop] = useState(cityList[0].code);
    const [CountryList, SetCountryList] = useState(cityList);
    const [searchQuery, setsearchQuery] = useState('')


    const onSelect = (eventKey) => {
        console.log(eventKey)
        const selectCityList = cityList.find(List => List.code === eventKey);
        console.log("--selectCityList--", selectCityList);


        setdropDownVal(`${selectCityList.code}`);
        setselDrop(eventKey);
        setsearchQuery('');
        SetCountryList(cityList);
    }
    const search = (e) => {
        const query = e.target.value;
        const lowerCaseQuery = query.toLowerCase();
        const serachData = query ?
            cityList.filter((List) =>
                List.city.toLowerCase().includes(lowerCaseQuery) || List.code.toLowerCase().includes(lowerCaseQuery)

            ) : cityList;

        setsearchQuery(query);
        SetCountryList(serachData);


    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ marginRight: '300px', fontSize: '12px' }}>Mobile</Form.Label>
                <Dropdown as={ButtonGroup} onSelect={onSelect}>
                    <Dropdown.Toggle variant="light" id="dropdown-custom-1" style={{ marginRight: '10px' }}>{dropDownVal}</Dropdown.Toggle>
                    <Dropdown.Menu >
                        <div className="search" style={{ marginLeft: '5px' }}>
                            <Form.Control type="text"
                                placeholder="search..." size="lg" block
                                onChange={search}
                                value={searchQuery}

                            /></div><br></br>
                        <div className="super">
                            {CountryList.length > 0 && CountryList.map(List =>
                                <Dropdown.Item key={List.id} active={selDrop === List.code} eventKey={List.code}>{List.city}-{List.code}

                                    <p>{List.city}<b style={{ marginLeft: '150px', marginTop: '15px' }}>{List.code}</b></p>
                                </Dropdown.Item>

                            )}

                            {
                                CountryList.length === 0 &&
                                <DropdownItem disabled>no record found</DropdownItem>
                            }
                        </div>

                    </Dropdown.Menu>

                    <Form.Control type="mobile" size="lg" block />

                </Dropdown>

            </Form.Group>
        </Form >
    )
}


export default Mobile;
