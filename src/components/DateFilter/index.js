import React, { useState } from 'react'
import './index.css'

const DateFilter = ({ setDateFilter }) => {
  const [yearSelected, setYearSelected] = useState(null)
  const [monthSelected, setMonthSelected] = useState(null)

  let yearArray = []
  for (let i = 2021; i > 1950; i--) {
    yearArray.push(i)
  }

  let monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const filterDate = (e) => {
    e.preventDefault()
    if (!yearSelected || !monthSelected)
      return window.alert('Please select a year and a month')
    setDateFilter([Number(yearSelected), Number(monthSelected)])
  }

  const resetFilter = (e) => {
    setYearSelected(null)
    setMonthSelected(null)
    setDateFilter([])
  }

  return (
    <>
      <button onClick={() => resetFilter()}>Reset</button>
      <form className='dateFilter' onSubmit={(e) => filterDate(e)}>
        <select
          id='Year'
          name='Year'
          required
          defaultValue='default'
          onChange={(e) => setYearSelected(e.target.value)}
        >
          <option value='default' disabled hidden>
            Year
          </option>
          {yearArray.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          id='Month'
          name='Month'
          required
          defaultValue='default'
          onChange={(e) => setMonthSelected(e.target.value)}
        >
          <option value='default' disabled hidden>
            Month
          </option>
          {monthArray.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default DateFilter
