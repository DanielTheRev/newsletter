/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import IconList from '../icon-list';
import IllustrationSingUpMobileSvg from '../illustration-sing-up-mobile-svg';
import SuccessCard from './Success-Card';
import Button from './ui/button';

const MobileCard = () => {
	const validate = (values: { email: string }) => {
		const { email } = values;
		const errors = {} as any;
		const regx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		const test = regx.test(email);

		if (!test) {
			errors.email = 'Valid email required';
		}
		return errors;
	};
	const handleSubmit = (values: { email: string }) => {
		console.log('submit');
		console.log(values);
	};

	const formik = useFormik({
		initialValues: { email: '' },
		validate,
		onSubmit: handleSubmit
	});

	const resetForm = () => {
		formik.resetForm();
	};

	return formik.isSubmitting && formik.isValid ? (
		<SuccessCard email={formik.values.email} resetForm={resetForm} />
	) : (
		<div className='flex flex-col w-full h-full min-[500px]:hidden min-[400px]:text-lg'>
			<IllustrationSingUpMobileSvg />
			<div className='flex flex-col h-full justify-around items-center w-full p-4'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-left w-full text-4xl font-bold pt-4'>Stay updated!</h1>
					<p className='text-left text-lg'>
						Join 60,000+ product managers receiving monthly updates on:
					</p>
				</div>

				<div className='flex w-full flex-col gap-4'>
					<div className='flex w-full items-start gap-2'>
						<div>
							<IconList />
						</div>
						<div className='font-bold text-DarkSlateGrey tracking-'>
							Product discovery and building what matters
						</div>
					</div>
					<div className='flex w-full items-start gap-2'>
						<div>
							<IconList />
						</div>
						<div className='font-bold text-DarkSlateGrey tracking-'>
							Measuring to ensure updates are a success
						</div>
					</div>
					<div className='flex w-full items-start gap-2'>
						<div>
							<IconList />
						</div>
						<div className='font-bold text-DarkSlateGrey tracking-'>And much more!</div>
					</div>
				</div>

				<form onSubmit={formik.handleSubmit} className='flex flex-col w-full gap-2'>
					<label htmlFor='email' className='flex justify-between font-bold text-[14px]'>
						Email adress
						{formik.errors.email && !formik.isValid && (
							<span className='text-Tomato'>{formik.errors.email}</span>
						)}
					</label>
					<input
						type='text'
						name='email'
						id='email'
						onChange={formik.handleChange}
						placeholder='email@company.com'
						required
						className={`border-2 outline-none focus:border-black rounded-lg p-4 ${
							formik.errors.email &&
							!formik.isValid &&
							'bg-red-300 focus:border-red-400 text-white'
						}`}
					/>
					<Button type='submit' message='Subscribe to monthly newsletter' />
				</form>
			</div>
		</div>
	);
};
export default MobileCard;
