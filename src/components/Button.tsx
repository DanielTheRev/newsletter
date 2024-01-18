interface Props {
	type: 'button' | 'submit';
	message: string;
	onclick?: () => void;
	extraClass?: string;
}

const Button = ({ type, message, onclick, extraClass }: Props) => {
	return (
		<button
			onClick={onclick}
			type={type}
			className={`w-full mt-4 rounded-lg outline-none bg-DarkSlateGrey hover:bg-Tomato hover:shadow-lg hover:shadow-Tomato transition-all text-white p-5 ${extraClass}`}>
			{message}
		</button>
	);
};
export default Button;
