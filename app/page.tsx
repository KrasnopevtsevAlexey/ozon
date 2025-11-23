import { Product } from "./models/product.model";


import { getData } from "./actions"
import { Query } from "./models/query.model";
import AddToCartBtn  from "./ui/addCartBtn";
// import AddCartBtn from "./ui/addCartBtn";




export default async function Home({searchParams}: {searchParams: Query}) {
  const query = await searchParams
    const products = await getData(query)


  return (
  
    	

	
		<div className="container">
			<div className="row">
				<div className="col-3 col-xl-2 d-none d-lg-block">
					<div className="filter">
						<div className="filter-title">
							<h5>Фильтр</h5>
						</div>
						<div className="filter-price">
							<div className="filter-price_title">
								Цена
							</div>
							<form>
								<div className="filter-price_range">
									<div className="filter-price_input-wrapper">
										<label htmlFor="min" className="filter-price_label">от</label>
										<input id="min" className="filter-price_input"/>
									</div>
									<div className="filter-price_input-wrapper">
										<label htmlFor="max" className="filter-price_label">до</label>
										<input id="max" className="filter-price_input"/></div>
								</div>
							</form>
						</div>
						<div className="filter-check">
							<label className="filter-check_label">
								<input type="checkbox" className="filter-check_checkbox" id="discount-checkbox"/>
								<span className="filter-check_checkmark"></span>
								<span className="filter-check_label-text">Акция</span>
							</label>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-9 col-xl-10">
					<div className="container">
						<div className="row no-gutters goods">
							{/* <!-- КАРТОЧКИ ТОВАРОВ --> */}
						{products.map((product: Product)=>{
return(
  <div key={product.id}  className="col-12 col-md-6 col-lg-4 col-xl-3">
								<div className="card" data-key={product.id}>
                                {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div>: ''}
                                
									<div className="card-img-wrapper">
										<span className="card-img-top"
											style={{backgroundImage: `url('${product.img}')`}}
                      // style={{backgroundImage: product.img}}
                      ></span>
									</div>
									<div className="card-body justify-content-between">
										<div className="card-price">{product.price} ₽</div>
										<h5 className="card-title">{product.title}</h5>
                    <AddToCartBtn product={product}/>
										{/* <button className="btn btn-primary">В корзину</button> */}
									</div>
								</div>
							</div>
)
  

            })}
							{/* <!-- END КАРТОЧКИ ТОВАРОВ --> */}
						</div>
					</div>

				</div>
			</div>
		</div>


	

	
   
    
  );
}
