const Button = ({
	type,
	message,
	onclick
}: {
	type: 'button' | 'submit';
	message: string;
	onclick?: () => void;
}) => {
	return (
		<button
			onClick={onclick}
			type={type}
			className='w-full mt-4 rounded-lg outline-none bg-DarkSlateGrey hover:bg-Tomato hover:shadow-lg hover:shadow-gray-300 transition-all text-white p-5'>
			{message}
		</button>
	);
};
export default Button;
