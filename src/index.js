import React from 'react';
import ReactDOM from 'react-dom/client';
const root=ReactDOM.createRoot(document.getElementById('root'));

const myFirstElement=<div>
                        <table>
                          <tr>
                             <td colspan="3">
                             <h1> Hello React</h1>
                             </td>
                          </tr>
                          <tr>
                            <td colSpan={3}>
                            <p>this is my first paragraph but how to append it without overwriting the root?</p>
                            </td>
                          </tr>  
                          <tr>
                            <td>Name:</td><td><input type={'text'}></input></td><td>Mobile Number:</td><td><input type={'tel'}></input></td>
                          </tr>  
                          <tr>
                          <td></td> <td></td> <td></td> <td><input type='button' id='btn_save' ></input> </td>
                          </tr>
                        </table>
                    </div>
root.render(myFirstElement);
//root.render(mySecondElement);
