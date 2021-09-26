const TitleAndDataRow: React.FC<{ title: string; data?: string }> = ({
  title,
  data,
  children
}) => {
  return (
    <div className="title-and-data-row">
      <TitleCell title={title} />
      {data? <DataCell data={data} /> : children}
    </div>
  );
};

const TitleCell: React.FC<{ title: string }> = ({title}) => {
  return (
    <p>{title}</p>
  );
}

const DataCell: React.FC<{ data: string }> = ({data}) => {
  return (
    <p className="text-2xl font-bold">{data}</p>
  );
}

export default TitleAndDataRow;