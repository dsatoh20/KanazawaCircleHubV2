import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const tags = ['公認', '文化系', '体育会系', '音楽', '兼サー可', '中途歓迎', 'インカレ', 'ボランティア', '初心者歓迎'];

export function SortChip({selectedItems, setSelectedItems}) {
  return (
    <ToggleGroup type="multiple" variant="outline" className="" value={selectedItems} onValueChange={setSelectedItems}>
        {tags.map((tag) => (
            <ToggleGroupItem size={"sm"} key={tag} value={tag} aria-label={`Toggle ${tag}`} className="m-0.5 p-2">
            {tag}
            </ToggleGroupItem>
        ))}
    </ToggleGroup>
  )
}
