

const MenuItem = ({item}) => {
    const {image,price,recipe,name}=item
    return (
        <div className="flex gap-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[90px] ring " src={image} alt="" />
            <div>
                <h3>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;