import MobileCard from './components/mobile-card/Mobile-Card';

function App() {
	return (
		<>
			<div className='fixed w-full max-w-full h-full max-h-full font-Roboto'>
				<MobileCard />
			</div>

			{/* <div className='fixed w-full max-w-full h-full max-h-full font-Roboto min-[500px]:block bg-DarkSlateGrey'>
				<div className='flex w-full h-full justify-center items-center'>
						<div className='bg-white'>
							<div>

							</div>
							<div>
								<img src="/images/illustration-sign-up-desktop.svg" alt="" />
							</div>
						</div>
				</div>
			</div> */}
		</>
	);
}

export default App;
