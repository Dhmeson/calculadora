import ContextBase from '@/ctx/contextBase'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Calculadora',
	description: 'Calculadora feita com nextjs'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ContextBase>{children}</ContextBase>
			</body>
		</html>
	)
}

