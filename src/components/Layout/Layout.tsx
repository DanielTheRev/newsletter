/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import IconList from '../icon-list';
import SuccessCard from '../Success-Card';
import Button from '../Button';
import IllustrationSignUp from '../IllustrationSignUp';

const Layout = () => {
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
		<div className='flex justify-center items-center w-full h-full min-[500px]:bg-CharcoalGrey bg-center'>
			<div className='flex flex-col items-center justify-center h-full gap-3 min-[500px]:gap  min-[500px]:h-auto min-[400px]:text-lg min-[500px]:flex-row-reverse min-[500px]:bg-white min-[500px]:p-5 min-[500px]:rounded-3xl'>
				<IllustrationSignUp />

				<div className='flex flex-col h-full min-[500px]:h-auto max-w-[375px] justify-around items-center p-4 pt-0 min-[500px]:p-8 gap-3 min-[500px]:gap-6'>
					<div className='flex flex-col gap-4'>
						<h1 className='text-left w-full text-4xl min-[500px]:text-5xl font-bold pt-4'>
							Stay updated!
						</h1>
						<p className='text-left text-lg min-[500px]:text-sm'>
							Join 60,000+ product managers receiving monthly updates on:
						</p>
					</div>

					<ul className='flex flex-col w-full min-[500px]:text-sm gap-4'>
						<li className='flex w-full items-start gap-2'>
							<span>
								<IconList />
							</span>
							<span className='font-bold text-DarkSlateGrey tracking-'>
								Product discovery and building what matters
							</span>
						</li>
						<li className='flex w-full items-start gap-2'>
							<span>
								<IconList />
							</span>
							<div className='font-bold text-DarkSlateGrey tracking-'>
								Measuring to ensure updates are a success
							</div>
						</li>
						<li className='flex w-full items-start gap-2'>
							<span>
								<IconList />
							</span>
							<div className='font-bold text-DarkSlateGrey tracking-'>And much more!</div>
						</li>
					</ul>

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
							className={`border-2 outline-none focus:border-black rounded-lg p-4 min-[500px]:p-2 ${
								formik.errors.email &&
								!formik.isValid &&
								'bg-red-300 focus:border-red-400 text-white'
							}`}
						/>
						<Button
							type='submit'
							message='Subscribe to monthly newsletter'
							extraClass='min-[500px]:p-3 min-[500px]:text-sm'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Layout;
