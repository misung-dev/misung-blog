import SortSelect from './SortSelect';

interface HeaderSectionProps {
  selectedTag: string;
}

export default function HeaderSection({ selectedTag }: HeaderSectionProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">
        {selectedTag === '전체' ? (
          '전체 글'
        ) : (
          <>
            <span className="text-primary">#</span>
            <span className="text-primary">{selectedTag}</span>
            <span> 관련 글</span>
          </>
        )}
      </h2>
      <SortSelect />
    </div>
  );
}
