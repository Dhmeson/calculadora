'use client'
import DisplayButtons from '@/components/DisplayButtons'
import { Context } from '@/ctx/contextBase'
import { Lightning, Moon } from '@phosphor-icons/react'
import { useContext } from 'react'

export default function Home() {
	const { ChangeMode, isDarkMode, stateValue, historyValues } =
		useContext(Context)
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-center ${
				isDarkMode ? 'bg-[#E2E2E2]' : 'bg-[#1D1E1E]'
			}`}
		>
			<section
				className={`w-[350px] h-[600px]  shadow-lg  ${
					isDarkMode ? 'bg-[#1D1E1E]' : 'bg-[#E2E2E2]'
				}  rounded-lg flex flex-col`}
			>
				<div
					className={`h-[60px] w-[100px] rounded-2xl mt-5 self-center ${
						isDarkMode ? 'bg-[#2F3030]' : 'bg-[#D6D3D0]'
					}  flex`}
				>
					<div className='flex-grow flex items-center justify-center cursor-pointer'>
						<Lightning
							onClick={() => ChangeMode(false)}
							size={28}
							color={`${isDarkMode ? '#5E6060' : '#efe6e6'}`}
							weight='thin'
						/>
					</div>
					<div className='flex-grow flex items-center justify-center cursor-pointer'>
						<Moon
							onClick={() => ChangeMode(true)}
							size={28}
							color={`${isDarkMode ? '#efe6e6' : '#5E6060'}`}
							weight='thin'
						/>
					</div>
				</div>
				<div className='h-[50%] flex flex-col items-end justify-end p-4 gap-2'>
					<div
						className={`text-[24px] ${
							isDarkMode ? 'text-[#E2E2E2]' : 'text-black'
						}`}
					>
						{historyValues.length > 0
							? historyValues + stateValue
							: ''}
					</div>
					<div
						className={`text-[40px] font-bold truncate text-right w-full ${
							isDarkMode ? 'text-[#E2E2E2]' : 'text-black'
						}`}
					>
						{stateValue}
					</div>
				</div>
				<DisplayButtons />
			</section>
		</main>
	)
}

