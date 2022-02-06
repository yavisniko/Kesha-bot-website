import { useState } from 'react';
import previewData from "./previewData.json"
import EachCommand from "./EachCommand"
import CommandsPreview from "./CommandsPreview"

export type previewType = 
| "$bidentweet"
| "$ship"
| "$sadcat"
| "$drip"
| "$github"
| "$clown"

const FunPhotos = () => {
	const [openPreview, setOpenPreview] = useState(false)
	const [previewCommand, setPreviewCommand] = useState<previewType>("$bidentweet")
	const commands: any = previewData.data 
	
  return <>
	{openPreview && <CommandsPreview command_name={previewCommand} closeSandbox={() => setOpenPreview(false)}/>}
	<div className="command-list">
		<code>$</code>
		- prefix
	</div>
	{
		commands.map((each: any, key: number) => {
			return <EachCommand command_name={each.command_name} setPreviewCommand={(cmd: previewType) => {
				setPreviewCommand(cmd)
				each.preview === true && setOpenPreview(true)
			}} preview={each.preview} text={each.text} key={key}/>
		})
	}

  </>;
};

export default FunPhotos;