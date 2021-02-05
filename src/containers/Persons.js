import React, { Component } from 'react';


import { connect } from 'react-redux';

import * as actions from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    
    /*state = {
        persons: []
    }
    */

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        
        this.props.addPerson(newPerson);
    }

    /*
    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }*/

    render () {
        return (
            <div>
                <AddPerson personAdded={ this.personAddedHandler } />
                {this.props.personList.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={ () => this.props.deletePerson(person.id) }/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        personList: state.personList
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        addPerson: (person) => dispatch({ type: actions.ADD_PERSON, person: person }),
        deletePerson: (personId) => dispatch({ type: actions.DELETE_PERSON, personId: personId}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);