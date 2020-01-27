import React, { Component } from 'react';
import * as actionTypes from '../store/actions';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdd} />
                {this.props.storedPersons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedPersons: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdd: () => dispatch ({type: actionTypes.personAdded}),
        onPersonDelete: (id) => dispatch({type: actionTypes.personDeleted, toDeleteId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);