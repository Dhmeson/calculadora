import { Context } from '@/ctx/contextBase'
import React, { useContext } from 'react'
interface props {
	text: string
	color?: string
}
export default function ButtonText({ text, color }: props) {
	const { isDarkMode } = useContext(Context)

	return (
		<div>
			<span
				className={`text-[23px]  font-bold ${
					isDarkMode ? 'text-white' : 'text-black'
				}`}
			>
				{text}
			</span>
		</div>
	)
}
