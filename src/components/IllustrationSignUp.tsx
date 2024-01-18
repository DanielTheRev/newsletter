const IllustrationSignUp = () => {
	return (
		<picture className='w-max h-max'>
			<source srcSet='./images/illustration-sign-up-mobile.svg' media='(max-width:400px)' />
			<img src='./images/illustration-sign-up-desktop.svg' />
		</picture>
	);
};
export default IllustrationSignUp;
