'use client'
import React, { createContext, useEffect, useMemo, useState } from 'react'
interface contextProps {
	isDarkMode: boolean
	ChangeMode: React.Dispatch<React.SetStateAction<boolean>>
	stateValue: string
	handleClickNumber: (value: string) => void
	handleClickOperation: (value: string) => void
	calculate: () => void
	clearFields: () => void
	addDote: () => void
	changeSignal: () => void
	historyValues: string
}
export const Context = createContext<contextProps>({} as contextProps)
interface props {
	children: React.ReactNode
}
export default function ContextBase({ children }: props) {
	const [isDarkMode, ChangeMode] = useState<boolean>(true)
	const [stateValue, setStateValue] = useState('')
	const [historyValues, setHistoryValues] = useState<string[]>([])
	const HISTORY = useMemo(() => {
		let result = ''
		historyValues.forEach((val) => {
			result += val
		})
		return result
	}, [historyValues, stateValue])
	const addDote = () => {
		const regex = /^[^.]*\.[^.]*$/
		const isValid = regex.test(stateValue)
		if (!isValid) setStateValue((prev) => prev + '.')
	}
	const handleClickNumber = (val: string) => {
		if (isZeroFirst()) {
			setStateValue(val)
			return
		}
		setStateValue((prev) => prev + val)
	}
	const handleClickOperation = (val: string) => {
		const oldValue = stateValue + val
		setHistoryValues((prev) => [...prev, oldValue])
		setStateValue('')
	}
	const calculate = () => {
		const value = HISTORY + stateValue
		const lastChar = value.trim().slice(-1)
		const regex = /[+\-/*%]/
		const isLastCharOperator = regex.test(lastChar)
		if (isLastCharOperator) return
		let result = ((+eval(value) * 1000) / 1000).toString()
		setResult(result)
	}
	const setResult = (res: string) => {
		setStateValue(res)
		setHistoryValues([])
	}

	function isZeroFirst() {
		if (stateValue == '0' || !stateValue) return true
		return false
	}

	function clearFields() {
		setStateValue('')
		setHistoryValues([])
	}
	const changeSignal = () => {
		if (stateValue.length == 0) return
		let value = stateValue

		if (value[0] == '-') {
			value = '+' + value.slice(1)
		} else if (value[0] == '+') {
			value = '-' + value.slice(1)
		} else if (value[0] != '+' && value[0] != '-') {
			value = '-' + value
		}

		setStateValue(value)
	}

	return (
		<Context.Provider
			value={{
				isDarkMode,
				ChangeMode,
				handleClickNumber,
				stateValue,
				historyValues: HISTORY,
				handleClickOperation,
				calculate,
				addDote,
				clearFields,
				changeSignal
			}}
		>
			{children}
		</Context.Provider>
	)
}
