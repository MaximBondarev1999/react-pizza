import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
   <ContentLoader
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <circle cx="133" cy="103" r="100" />
      <rect x="9" y="226" rx="11" ry="11" width="270" height="55" />
      <rect x="8" y="304" rx="10" ry="10" width="270" height="87" />
      <rect x="129" y="414" rx="30" ry="30" width="150" height="46" />
      <rect x="14" y="414" rx="8" ry="8" width="89" height="46" />
   </ContentLoader>
)

export default Skeleton