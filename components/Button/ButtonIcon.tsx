'use client'
import { Icon } from '@phosphor-icons/react'
import React from 'react'
interface props {
	icon: Icon
	color: string
}
export default function ButtonIcon({ icon: Icon, color }: props) {
	return (
		<Icon
			size={28}
			color={color}
			//color={isGreenColor ? '#1AE87E' : 'black'}
			weight='thin'
		/>
	)
}
