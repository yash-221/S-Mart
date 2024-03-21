import React from 'react';

const items = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    }
];

const Category = ({ transformedData }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'  }}>
            {transformedData.map((category, index) => (
                <div key={index} style={{ maxWidth: '100px', margin: '45.9px', textAlign: 'center', fontFamily: 'popins', fontSize: '20px' }}>
                    <img src={category.image} alt={category.categoryName} style={{ width: '100%', height: '100px', backgroundColor: '#f131a1', borderRadius: '50%', overflow: 'hidden' }} />
                    <p>{category.categoryName}</p>
                </div>
            ))}
        </div>
    );
};

export default Category;
