'use client'
import React, { useContext } from 'react'
import { Button } from './Button'
import {
	ArrowClockwise,
	Divide,
	Dot,
	Equals,
	Minus,
	Moon,
	Percent,
	Plus,
	PlusMinus,
	X
} from '@phosphor-icons/react'
import { Context } from '@/ctx/contextBase'

export default function DisplayButtons() {
	const {
		isDarkMode,
		handleClickNumber,
		handleClickOperation,
		calculate,
		addDote,
		clearFields,
		changeSignal
	} = useContext(Context)

	return (
		<div
			className={`${
				isDarkMode ? 'bg-[#2F3030]' : 'bg-[#E2E2E2]'
			}  h-full flex flex-col rounded-t-3xl gap-2 p-4 `}
		>
			<div className='flex justify-around'>
				<Button.Root action={() => clearFields()}>
					<Button.Text
						text='AC'
						color='green'
					></Button.Text>
				</Button.Root>
				<Button.Root action={changeSignal}>
					<Button.Icon
						icon={PlusMinus}
						color='#1AE87E'
					></Button.Icon>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('%')}>
					<Button.Icon
						icon={Percent}
						color='#1AE87E'
					></Button.Icon>
				</Button.Root>
				<Button.Root action={() => handleClickOperation('/')}>
					<Button.Icon
						icon={Divide}
						color='#F84E13'
					></Button.Icon>
				</Button.Root>
			</div>
			<div className='flex justify-around'>
				<Button.Root action={() => handleClickNumber('7')}>
					<Button.Text text='7'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('8')}>
					<Button.Text text='8'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('9')}>
					<Button.Text text='9'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickOperation('*')}>
					<Button.Icon
						icon={X}
						color='#F84E13'
					></Button.Icon>
				</Button.Root>
			</div>
			<div className='flex justify-around'>
				<Button.Root action={() => handleClickNumber('4')}>
					<Button.Text text='4'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('5')}>
					<Button.Text text='5'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('6')}>
					<Button.Text text='6'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickOperation('-')}>
					<Button.Icon
						icon={Minus}
						color='#F84E13'
					></Button.Icon>
				</Button.Root>
			</div>
			<div className='flex justify-around'>
				<Button.Root action={() => handleClickNumber('1')}>
					<Button.Text text='1'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('2')}>
					<Button.Text text='2'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('3')}>
					<Button.Text text='3'></Button.Text>
				</Button.Root>
				<Button.Root action={() => handleClickOperation('+')}>
					<Button.Icon
						icon={Plus}
						color='#F84E13'
					></Button.Icon>
				</Button.Root>
			</div>
			<div className='flex justify-around'>
				<Button.Root>
					<Button.Icon
						icon={ArrowClockwise}
						color={isDarkMode ? 'white' : 'black'}
					></Button.Icon>
				</Button.Root>
				<Button.Root action={() => handleClickNumber('0')}>
					<Button.Text text='0'></Button.Text>
				</Button.Root>
				<Button.Root action={addDote}>
					<Button.Icon
						icon={Dot}
						color={isDarkMode ? 'white' : 'black'}
					></Button.Icon>
				</Button.Root>
				<Button.Root action={calculate}>
					<Button.Icon
						icon={Equals}
						color='#F84E13'
					></Button.Icon>
				</Button.Root>
			</div>
		</div>
	)
}
