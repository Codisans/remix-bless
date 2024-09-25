import {
	DetailedHTMLProps,
	DetailsHTMLAttributes,
	ReactNode,
	useRef,
	useState,
} from "react";
import {Symbol} from "../atoms/Symbol";

type AccordionProps = DetailedHTMLProps<
	DetailsHTMLAttributes<HTMLDetailsElement>,
	HTMLDetailsElement
> & {
	summary: ReactNode;
};

export const Accordion = (props: AccordionProps) => {
	const {children, className, open, summary} = props;
	const contentRef = useRef<HTMLDivElement>(null);
	const openRef = useRef(open);
	const [isOpen, setIsOpen] = useState(open);
	const [isClosing, setIsClosing] = useState(false);
	const [height, setHeight] = useState<string | undefined>();

	return (
		<details
			className={`${className} accordion border-y border-y-grey-lunar [.accordion+&]:border-t-0`}
			open={isOpen}
			{...props}
		>
			<summary
				className="select-none"
				onClick={(event) => {
					event.preventDefault();

					setHeight(
						`${
							openRef.current
								? contentRef.current?.offsetHeight
								: 0
						}px`,
					);
					setIsClosing(!openRef.current);

					if (openRef.current) {
						openRef.current = false;
					} else {
						openRef.current = true;
						setIsOpen(true);
					}

					requestAnimationFrame(() => {
						setHeight(
							`${
								openRef.current
									? contentRef.current!.scrollHeight
									: 0
							}px`,
						);
						setIsClosing(!openRef.current);
					});
				}}
			>
				<div className="flex px-6 py-8 items-center justify-between">
					<div className="text-h5">{summary}</div>
					<Symbol
						className={`w-6.5 h-6.5 transition-transform duration-300 ${
							isOpen && !isClosing ? "-rotate-45" : ""
						}`}
						name="plus-large"
					/>
				</div>
			</summary>
			<div
				ref={contentRef}
				className="overflow-hidden transition-height duration-300"
				style={{height: height}}
				onTransitionEnd={(event) => {
					if (
						event.target !== event.currentTarget ||
						event.propertyName !== "height"
					) {
						return;
					}

					setHeight(undefined);

					if (!openRef.current) {
						setIsOpen(false);
						setIsClosing(false);
					}
				}}
			>
				<div className="px-6 pb-8">{children}</div>
			</div>
		</details>
	);
};
