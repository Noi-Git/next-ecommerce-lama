import CategoryList from '@/components/CategoryList'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import {
  productSection,
  productSectionHeading,
} from '@/components/styles/productStyle'

export default function Home() {
  return (
    <div className='home'>
      <Slider />
      <div className={productSection}>
        <h1 className={productSectionHeading}>Feature Products</h1>
        <ProductList />
        <div className={productSection}>
          <h1 className={productSectionHeading}>Categories</h1>
          <CategoryList />
        </div>
        <div className={productSection}>
          <h1 className={productSectionHeading}>New Products</h1>
          <ProductList />
        </div>
      </div>
    </div>
  )
}
