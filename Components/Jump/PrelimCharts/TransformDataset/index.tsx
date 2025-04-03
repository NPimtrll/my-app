export interface DatasetProps {
    title: string;
    data: number[];
  }
  
  export const transformDataset = (props: DatasetProps[]): DatasetProps[] => {
    const dataset = [...props];
    return dataset.map((item) => {
      if (item.title === "Sector" || item.title === "Market") {
        return { ...item, title: "Average Sector" };
      } else if (item.title === "Strong Player") {
        return { ...item, title: "Top 5" };
      }
      return item;
    });
  };