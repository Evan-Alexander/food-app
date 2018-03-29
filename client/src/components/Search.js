import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';



export default class Search extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Input type='text' placeholder='coffee, dinner, bars ...' />{' '}
          <Input type='text' placeholder='location' />{' '}
          <Button><FaSearch size={24}/></Button>
        </FormGroup>
      </Form>
    );
  }
}
