import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import * as actionTypes from "../store/actionTypes";
import { connect } from "react-redux";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.prsn.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prsn: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: { name, age } }),
    onDeletePerson: (id) => dispatch({ type: actionTypes.DELETE_PERSON, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
