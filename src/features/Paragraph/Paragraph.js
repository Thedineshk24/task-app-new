import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setText, setSkipWordsNums } from "./paragraphSlice";
import "./paragraph.css";
import { Button, Form, Label, Input } from "reactstrap";

export function Paragraph() {
  const text = useSelector((state) => state.paragraphReducer.text);
  const first = useSelector((state) => state.paragraphReducer.firstString);
  const last = useSelector((state) => state.paragraphReducer.lastString);

  const dispatch = useDispatch();
  const [paragraphtext, setParagraphText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paragraphtext) {
      dispatch(setText(paragraphtext));
    }
  };
  return (
    <Form className='main__form'>
      <div className='paragraph__app'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>String Manipulation</h2>
            <hr className='mb-4' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <Label for='input-string'>Input String</Label>
          </div>
          <div className='col-md-9'>
            <Input
              type='textarea'
              name='text'
              onChange={(e) => setParagraphText(e.target.value)}
            />
          </div>
        </div>
        <div className='row'></div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-9'>
            <Label className='label__text' for='skip-words'>
              Skip last
              <Input
                className='input__number'
                type='number'
                name='text'
                onChange={(e) => dispatch(setSkipWordsNums(e.target.value))}
              />
              words
            </Label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-9 form__btn'>
            <Button className='bg-info pr-5' onClick={handleSubmit}>
              RUN
            </Button>
          </div>
        </div>
        <div className='row output__margin'>
          {text.length > 0 && (
            <>
              <div className='col-md-3'>
                <Label for=''>Output :</Label>
              </div>
              <div className='col-md-9'>
                <p className='out__text'>{first.replace('..','. ')+' '+last}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Form>
  );
}
