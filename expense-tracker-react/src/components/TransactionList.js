import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const context = useContext(GlobalContext)
  console.log(context)
  return (
    <>
    <h3>History</h3>
      <ul id="list" class="list">
         <li class="minus">
          Cash <span>-$400</span><button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}
