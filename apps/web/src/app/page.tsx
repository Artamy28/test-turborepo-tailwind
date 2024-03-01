import { Button } from "@nextui-org/button";

export default function Page(): JSX.Element {
  return (
    <>
		<div className="flex flex-col gap-4 p-4 min-h-screen items-center justify-center">
			<Button color="primary" variant='bordered'>
				Default
			</Button>
			<Button color="primary">
				Primary
			</Button>
			<Button color="secondary">
				Secondary
			</Button>
			<Button color="success">
				Success
			</Button>
			<Button color="warning">
				Warning
			</Button>
			<Button color="danger">
				Danger
			</Button>
			<button
				type="button"
				className="rounded-xl bg-blue-500 py-2 px-2.5 text-white hover:bg-blue-600"
			>
				Tailwind Button!
			</button>
		</div>
	</>
  );
}
