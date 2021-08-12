import Select from 'react-select'
import { useState, useEffect } from 'react'
import './calendar.css'

const Calendar = (props) => {

    const [form, setform] = useState({ day:'1', moon:'january', year:'2021' })

    const handleDay = value => {
        setform({...form, ...{day: value.value}})
    }

    const handleMoon = value => {
        setform({...form, ...{moon: value.value}})
    }

    const handleYear = value => {
        setform({...form, ...{year: value.value}})
    }

    useEffect(()=>{
        setform({ day: props.day, moon: props.moon, year: props.year })
    },[props])


    // useEffect(()=>{
    //     props.onChange(form)
    //     console.log('useEffect')
    // }, [props])


    let optionsDay = []
    for (let i = 1; i < 32; i++) {
        optionsDay.push({ value: i, label: i })
    }

    const optionsMoon = [
        { value: 'january', label: 'january' },
        { value: 'february', label: 'february' },
        { value: 'march', label: 'march' },
        { value: 'april', label: 'april' },
        { value: 'may', label: 'may' },
        { value: 'june', label: 'june' },
        { value: 'july', label: 'july' },
        { value: 'august', label: 'august' },
        { value: 'september', label: 'september' },
        { value: 'october', label: 'october' },
        { value: 'november', label: 'november' },
        { value: 'december', label: 'december' },
    ]

    let optionsYear = []
    const year = new Date().getFullYear()
    for (let i = year; i > (year - 50); i--) {
        optionsYear.push({ value: i, label: i })
    }
    return (
        <div className="mb-3 row">
            <label htmlFor="phone-number" className="col-sm-4 col-form-label" >
                <p className="text-muted"><small>Phone number</small></p>
            </label>
            <div className="col">
                <Select
                    defaultValue={{ value: form.day, label: form.day }}
                    options={optionsDay}
                    onChange={handleDay}
                    // formatGroupLabel={formatGroupLabel}
                />
            </div>
            <div className="col">
                <Select
                    defaultValue={{ value: form.moon, label: form.moon }}
                    options={optionsMoon}
                    onChange={handleMoon}
                    // formatGroupLabel={formatGroupLabel}
                />
            </div>
            <div className="col">
                <Select
                    defaultValue={{ value: form.year, label: form.year }}
                    options={optionsYear}
                    onChange={handleYear}
                    // formatGroupLabel={formatGroupLabel}
                />
            </div>
        </div>
    )
}

export default Calendar