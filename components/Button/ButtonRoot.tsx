import { Context } from '@/ctx/contextBase'
import React, { useContext } from 'react'
interface props {
	children: React.ReactNode
	action?: () => void
}
export default function ButtonRoot({ children, action }: props) {
	const { isDarkMode } = useContext(Context)
	return (
		<div
			onClick={() => action?.()}
			className={`flex w-14 h-14 items-center justify-center rounded-md text-[14px] cursor-pointer  ${
				isDarkMode ? 'bg-[#1D1E1E]' : 'bg-slate-300'
			}`}
		>
			{children}
		</div>
	)
}
