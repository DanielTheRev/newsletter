import Button from './Button';
import IconSucces from './icon-success';

const SuccessCard = ({ email, resetForm }: { email: string; resetForm: () => void }) => {
	return (
		<div className='flex justify-center items-center w-full h-full min-[500px]:bg-CharcoalGrey'>
			<div className='flex flex-col h-full max-w-lg bg-white min-[500px]:h-auto rounded-3xl mb-[40px] min-[500px]:p-8'>
				<div className='flex flex-col w-full h-full justify-start items-left gap-6 px-6'>
					<div className='flex flex-col items-start gap-10 mt-[148px] min-[500px]:mt-0'>
						<IconSucces />
						<h1 className='text-6xl text-left font-bold '>
							Thanks for subscribing!
						</h1>
					</div>
					<p>
						A confirmation email has been sent to <span className='font-bold'>{email}</span>.
						Please open it and click the button inside to confirm your subscription.
					</p>
				</div>
				<div className='flex w-full px-6 min-[500px]:p-5'>
					<Button type='button' message='Dismiss message' onclick={resetForm} />
				</div>
			</div>
		</div>
	);
};
export default SuccessCard;
