import React from 'react'
import { connect } from 'react-redux'
import { findLeafs } from './../actions/node'

let Search = ({dispatch}) => {
  let input
  return (
  <div>
    <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(findLeafs(input.value.trim()))
      }}>
      <input ref={item => {
          input = item
        }} />
      <button type="submit">Search</button>
    </form>
  </div>)
}

Search = connect()(Search)

export default Search
