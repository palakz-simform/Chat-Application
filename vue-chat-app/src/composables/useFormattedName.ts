export const useFormattedName = () => {
	const userInitials = (empName: string): string => {
			const firstLetter: string = empName.charAt(0).toUpperCase();
			const index: number = empName.indexOf(" ");
			const secondLetter: string = empName
				.charAt(index + 1)
				.toUpperCase();
			return firstLetter + secondLetter;
	};
	return { userInitials };
};
