import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					background: '#18181b',
					width: '1200px',
					height: '630px',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					fontSize: 56,
					fontFamily: 'Space Grotesk, Inter, sans-serif',
					fontWeight: 700,
					letterSpacing: '-1px',
				}}
			>
				<span style={{fontSize: 72, marginBottom: 24}}>Cyrielle Coul</span>
				<span style={{fontSize: 36, fontWeight: 400}}>Développeuse Frontend & Mobile</span>
				<span style={{fontSize: 24, fontWeight: 300, marginTop: 32, opacity: 0.7}}>cyriellecoul.github.io/devPortfolio</span>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
