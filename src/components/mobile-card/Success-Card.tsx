import IconSucces from '../icon-success';
import Button from './ui/button';

const SuccessCard = ({ email, resetForm }: { email: string; resetForm: () => void }) => {
	return (
		<div className='grid grid-rows-[1fr_max-content] w-full h-full overflow-auto'>
			<div className='flex flex-col w-full justify-start items-left gap-6 px-6'>
				<div className='flex flex-col items-start gap-10 mt-[148px]'>
					{/* <img src='/images/icon-success.svg' alt='' /> */}
					<IconSucces />
					<h1 className='text-5xl text-left font-bold leading-10 tracking-[-4px]'>
						Thanks for <br /> subscribing!
					</h1>
				</div>
				<p>
					A confirmation email has been sent to <span className='font-bold'>{email}</span>.
					Please open it and click the button inside to confirm your subscription.
				</p>
			</div>
			<div className='flex w-full mb-[40px] px-6'>
				<Button type='button' message='Dismiss message' onclick={resetForm} />
			</div>
		</div>
	);
};
export default SuccessCard;
