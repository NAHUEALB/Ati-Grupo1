import React, { useCallback, useReducer } from "react";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./Formulario.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const Formulario = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      hostname: {
        value: "",
        isValid: false,
      },
      maxplayers: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  return (
    <div className="centrado">
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <div className="inputs">
          <Input
            id="hostname"
            element="input"
            type="text"
            label="hostname"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid hostname."
            onInput={inputHandler}
          />
          <Input
            id="maxplayers"
            element="input"
            label="maxplayers"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid maxplayers (at least 5 characters)."
            onInput={inputHandler}
          />
          <Input
            id="admin"
            element="input"
            type="text"
            label="admin"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid admin."
            onInput={inputHandler}
          />
          <Input
            id="algo"
            element="input"
            label="algo"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid algo (at least 5 characters)."
            onInput={inputHandler}
          />
        </div>
        {/* SOLUCION ALTERNATIVA */}
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}

        <Button type="submit" disabled={!formState.isValid} block>
          Crear
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
