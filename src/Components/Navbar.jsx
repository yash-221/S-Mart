import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css'; // Import kar rahe hain Navbar ke liye CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 py-2 shadow-bg sticky-left-corner">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-2">
            <div className="left-item" style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize: '24px' }}>LalaJi</div>
          </div>
          <div className="col-10">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Offer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Contact</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
              <a href="/" style={{ color: 'white',marginRight: '11px',marginLeft: '7px'}}>
                <FaUser size={22} />
              </a>
              <a href="/" style={{ color: 'white'}}>
                <FaShoppingCart size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/*
{
    "data": {
        "category": [
            {
                "id": 528,
                "name": "Laptops",
                "parent_id": 2,
                "parent_category_name": "Old",
                "created_by": 785,
                "business_id": 105,
                "ordering": 1,
                "status": "1",
                "status_name": "Active",
                "image": "https://testapi.arbsindia.com/public/default.png",
                "product_details": [
                    {
                        "id": 2206,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Zebronics",
                        "category_ids": [
                            {
                                "id": 2556,
                                "product_id": 2206,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 20000,
                        "purchase_price": 18000,
                        "mrp": 30000,
                        "discount": 10000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "laptop",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Grab the ZEB-NBC 2S, a laptop that is portable, appealing, and elegant. Some of the most exciting features to get your hands on this laptop at once include its 11th-gen processor, IPS display for immersive wide-angle viewing, powerful storage, support for dual-band WiFi, quick data transfer, and simple input & output connectivity. The laptop's type-C charging capability makes it universally and conveniently usable, enabling you to operate without interruption for up to 10 hours. ",
                        "product_images": [
                            {
                                "id": 104,
                                "created_by": 785,
                                "product_id": 2206,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2206/104/16989936486607891.webp"
                            },
                            {
                                "id": 103,
                                "created_by": 785,
                                "product_id": 2206,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2206/103/16989936458637922.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2197,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Lenovo Think Pad",
                        "category_ids": [
                            {
                                "id": 2543,
                                "product_id": 2197,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 54000,
                        "purchase_price": 40000,
                        "mrp": 60000,
                        "discount": 6000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "laptop",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest laptop",
                        "product_images": [
                            {
                                "id": 78,
                                "created_by": 785,
                                "product_id": 2197,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2197/78/16986534182027286.webp"
                            },
                            {
                                "id": 77,
                                "created_by": 785,
                                "product_id": 2197,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2197/77/16986534184678082.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2196,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Asus Tuf A 15",
                        "category_ids": [
                            {
                                "id": 2542,
                                "product_id": 2196,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 84000,
                        "purchase_price": 40000,
                        "mrp": 90000,
                        "discount": 6000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "hp pavelion",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest laptop",
                        "product_images": [
                            {
                                "id": 80,
                                "created_by": 785,
                                "product_id": 2196,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2196/80/16986534536963173.webp"
                            },
                            {
                                "id": 79,
                                "created_by": 785,
                                "product_id": 2196,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2196/79/16986534511352334.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2195,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Asus Tuf A 15",
                        "category_ids": [
                            {
                                "id": 2541,
                                "product_id": 2195,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 80000,
                        "purchase_price": 40000,
                        "mrp": 90000,
                        "discount": 10000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "hp pavelion",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest laptop",
                        "product_images": [
                            {
                                "id": 82,
                                "created_by": 785,
                                "product_id": 2195,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2195/82/1698653472486574.webp"
                            },
                            {
                                "id": 81,
                                "created_by": 785,
                                "product_id": 2195,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2195/81/1698653470581136.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2194,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Asus Tuf A 17",
                        "category_ids": [
                            {
                                "id": 2540,
                                "product_id": 2194,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 90000,
                        "purchase_price": 40000,
                        "mrp": 90000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "hp pavelion",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest laptop",
                        "product_images": [
                            {
                                "id": 84,
                                "created_by": 785,
                                "product_id": 2194,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2194/84/16986535164430302.webp"
                            },
                            {
                                "id": 83,
                                "created_by": 785,
                                "product_id": 2194,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2194/83/16986535143343365.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2193,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Lenovo Yoga",
                        "category_ids": [
                            {
                                "id": 2539,
                                "product_id": 2193,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 80000,
                        "purchase_price": 40000,
                        "mrp": 80000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "hp pavelion",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest laptop",
                        "product_images": [
                            {
                                "id": 86,
                                "created_by": 785,
                                "product_id": 2193,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2193/86/16986535397072839.webp"
                            },
                            {
                                "id": 85,
                                "created_by": 785,
                                "product_id": 2193,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2193/85/16986535363247001.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2192,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "hp Pavelion",
                        "category_ids": [
                            {
                                "id": 2538,
                                "product_id": 2192,
                                "category_id": 528,
                                "category_name": "Laptops"
                            }
                        ],
                        "selling_price": 50000,
                        "purchase_price": 40000,
                        "mrp": 60000,
                        "discount": 10000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "hp pavelion",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest laptop",
                        "product_images": [
                            {
                                "id": 88,
                                "created_by": 785,
                                "product_id": 2192,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2192/88/1698653620859510.jpg"
                            },
                            {
                                "id": 87,
                                "created_by": 785,
                                "product_id": 2192,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2192/87/16986536172409691.jpg"
                            }
                        ],
                        "product_variant": []
                    }
                ]
            },
            {
                "id": 534,
                "name": "bottle",
                "parent_id": 3,
                "parent_category_name": "fruit",
                "created_by": 785,
                "business_id": 105,
                "ordering": 1,
                "status": "1",
                "status_name": "Active",
                "image": "https://testapi.arbsindia.com/public/default.png",
                "product_details": [
                    {
                        "id": 2209,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Jpt",
                        "category_ids": [
                            {
                                "id": 2559,
                                "product_id": 2209,
                                "category_id": 534,
                                "category_name": "bottle"
                            }
                        ],
                        "selling_price": 20000,
                        "purchase_price": 18000,
                        "mrp": 30000,
                        "discount": 10000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "laptop",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Grab the ZEB-NBC 2S, a laptop that is portable, appealing, and elegant. Some of the most exciting features to get your hands on this laptop at once include its 11th-gen processor, IPS display for immersive wide-angle viewing, powerful storage, support for dual-band WiFi, quick data transfer, and simple input & output connectivity. The laptop's type-C charging capability makes it universally and conveniently usable, enabling you to operate without interruption for up to 10 hours. ",
                        "product_images": [
                            {
                                "id": 110,
                                "created_by": 785,
                                "product_id": 2209,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2209/110/16990172686333746.jpg"
                            },
                            {
                                "id": 109,
                                "created_by": 785,
                                "product_id": 2209,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2209/109/16990172643690374.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2208,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Jeb",
                        "category_ids": [
                            {
                                "id": 2558,
                                "product_id": 2208,
                                "category_id": 534,
                                "category_name": "bottle"
                            }
                        ],
                        "selling_price": 20000,
                        "purchase_price": 18000,
                        "mrp": 30000,
                        "discount": 10000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "laptop",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Grab the ZEB-NBC 2S, a laptop that is portable, appealing, and elegant. Some of the most exciting features to get your hands on this laptop at once include its 11th-gen processor, IPS display for immersive wide-angle viewing, powerful storage, support for dual-band WiFi, quick data transfer, and simple input & output connectivity. The laptop's type-C charging capability makes it universally and conveniently usable, enabling you to operate without interruption for up to 10 hours. ",
                        "product_images": [
                            {
                                "id": 108,
                                "created_by": 785,
                                "product_id": 2208,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2208/108/16990172302597285.jpg"
                            },
                            {
                                "id": 107,
                                "created_by": 785,
                                "product_id": 2208,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2208/107/16990172272877069.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2207,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Zebi",
                        "category_ids": [
                            {
                                "id": 2557,
                                "product_id": 2207,
                                "category_id": 534,
                                "category_name": "bottle"
                            }
                        ],
                        "selling_price": 20000,
                        "purchase_price": 18000,
                        "mrp": 30000,
                        "discount": 10000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "laptop",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Grab the ZEB-NBC 2S, a laptop that is portable, appealing, and elegant. Some of the most exciting features to get your hands on this laptop at once include its 11th-gen processor, IPS display for immersive wide-angle viewing, powerful storage, support for dual-band WiFi, quick data transfer, and simple input & output connectivity. The laptop's type-C charging capability makes it universally and conveniently usable, enabling you to operate without interruption for up to 10 hours. ",
                        "product_images": [
                            {
                                "id": 106,
                                "created_by": 785,
                                "product_id": 2207,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2207/106/16990171926194104.jpg"
                            },
                            {
                                "id": 105,
                                "created_by": 785,
                                "product_id": 2207,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2207/105/16990171884381630.jpg"
                            }
                        ],
                        "product_variant": []
                    }
                ]
            },
            {
                "id": 565,
                "name": "Smartphones",
                "parent_id": 2,
                "parent_category_name": "Old",
                "created_by": 785,
                "business_id": 105,
                "ordering": 1,
                "status": "1",
                "status_name": "Active",
                "image": "https://testapi.arbsindia.com/public/default.png",
                "product_details": [
                    {
                        "id": 2308,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Iphone S",
                        "category_ids": [
                            {
                                "id": 2595,
                                "product_id": 2308,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 60000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 112,
                                "created_by": 785,
                                "product_id": 2308,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2308/112/17021035209729262.jpg"
                            },
                            {
                                "id": 111,
                                "created_by": 785,
                                "product_id": 2308,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2308/111/17021035169928656.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2307,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Iphone X",
                        "category_ids": [
                            {
                                "id": 2594,
                                "product_id": 2307,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 60000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 114,
                                "created_by": 785,
                                "product_id": 2307,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2307/114/17021035789605854.webp"
                            },
                            {
                                "id": 113,
                                "created_by": 785,
                                "product_id": 2307,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2307/113/17021035758802911.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2306,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Intex YT",
                        "category_ids": [
                            {
                                "id": 2593,
                                "product_id": 2306,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 7999,
                        "purchase_price": 6000,
                        "mrp": 10000,
                        "discount": 2001,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 116,
                                "created_by": 785,
                                "product_id": 2306,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2306/116/17021036143013855.webp"
                            },
                            {
                                "id": 115,
                                "created_by": 785,
                                "product_id": 2306,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2306/115/17021036076138270.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2305,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Nokia X",
                        "category_ids": [
                            {
                                "id": 2592,
                                "product_id": 2305,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 9000,
                        "purchase_price": 6000,
                        "mrp": 10000,
                        "discount": 1000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 118,
                                "created_by": 785,
                                "product_id": 2305,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2305/118/17021036768932688.jpg"
                            },
                            {
                                "id": 117,
                                "created_by": 785,
                                "product_id": 2305,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2305/117/17021036736933472.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2304,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "samsung 5pro",
                        "category_ids": [
                            {
                                "id": 2591,
                                "product_id": 2304,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 9000,
                        "purchase_price": 6000,
                        "mrp": 10000,
                        "discount": 1000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 120,
                                "created_by": 785,
                                "product_id": 2304,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2304/120/17021037114666314.jpg"
                            },
                            {
                                "id": 119,
                                "created_by": 785,
                                "product_id": 2304,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2304/119/17021037072075750.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2303,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "samsung MX1",
                        "category_ids": [
                            {
                                "id": 2590,
                                "product_id": 2303,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 80000,
                        "purchase_price": 60000,
                        "mrp": 100000,
                        "discount": 20000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 122,
                                "created_by": 785,
                                "product_id": 2303,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2303/122/1702103778297139.webp"
                            },
                            {
                                "id": 121,
                                "created_by": 785,
                                "product_id": 2303,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2303/121/17021037759544650.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2302,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Realme U1",
                        "category_ids": [
                            {
                                "id": 2589,
                                "product_id": 2302,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 8000,
                        "purchase_price": 6000,
                        "mrp": 10000,
                        "discount": 2000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 124,
                                "created_by": 785,
                                "product_id": 2302,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2302/124/17021038073945589.webp"
                            },
                            {
                                "id": 123,
                                "created_by": 785,
                                "product_id": 2302,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2302/123/1702103803961497.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2301,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Realme c55",
                        "category_ids": [
                            {
                                "id": 2588,
                                "product_id": 2301,
                                "category_id": 565,
                                "category_name": "Smartphones"
                            }
                        ],
                        "selling_price": 14000,
                        "purchase_price": 10000,
                        "mrp": 18000,
                        "discount": 4000,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "phone",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. Whether you're viewing a high-definition video, playing graphics-intensive video games, or running many programmes at once, 16 GB of dynamic RAM offers a seamless and responsive user experience without lag or glitches.",
                        "product_images": [
                            {
                                "id": 126,
                                "created_by": 785,
                                "product_id": 2301,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2301/126/17021038288413313.webp"
                            },
                            {
                                "id": 125,
                                "created_by": 785,
                                "product_id": 2301,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2301/125/17021038243499249.webp"
                            }
                        ],
                        "product_variant": []
                    }
                ]
            },
            {
                "id": 491,
                "name": "cars",
                "parent_id": 2,
                "parent_category_name": "Old",
                "created_by": 785,
                "business_id": 105,
                "ordering": 1,
                "status": "1",
                "status_name": "Active",
                "image": "https://testapi.arbsindia.com/public/default.png",
                "product_details": [
                    {
                        "id": 2203,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Audi",
                        "category_ids": [
                            {
                                "id": 2549,
                                "product_id": 2203,
                                "category_id": 491,
                                "category_name": "cars"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 80000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "car",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest car",
                        "product_images": [
                            {
                                "id": 92,
                                "created_by": 785,
                                "product_id": 2203,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2203/92/16986536845005342.jpg"
                            },
                            {
                                "id": 91,
                                "created_by": 785,
                                "product_id": 2203,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2203/91/16986536814255407.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2202,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Avanti",
                        "category_ids": [
                            {
                                "id": 2548,
                                "product_id": 2202,
                                "category_id": 491,
                                "category_name": "cars"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 80000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "car",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest car",
                        "product_images": [
                            {
                                "id": 94,
                                "created_by": 785,
                                "product_id": 2202,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2202/94/16986537312336205.jpg"
                            },
                            {
                                "id": 93,
                                "created_by": 785,
                                "product_id": 2202,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2202/93/16986537281072655.webp"
                            },
                            {
                                "id": 90,
                                "created_by": 785,
                                "product_id": 2202,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2202/90/16986536706860548.jpg"
                            },
                            {
                                "id": 89,
                                "created_by": 785,
                                "product_id": 2202,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2202/89/16986536684678909.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2201,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Veron",
                        "category_ids": [
                            {
                                "id": 2547,
                                "product_id": 2201,
                                "category_id": 491,
                                "category_name": "cars"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 80000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "car",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest car",
                        "product_images": [
                            {
                                "id": 96,
                                "created_by": 785,
                                "product_id": 2201,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2201/96/16986537843866911.webp"
                            },
                            {
                                "id": 95,
                                "created_by": 785,
                                "product_id": 2201,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2201/95/16986537802876366.jpg"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2200,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Bugati",
                        "category_ids": [
                            {
                                "id": 2546,
                                "product_id": 2200,
                                "category_id": 491,
                                "category_name": "cars"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 80000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "car",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest car",
                        "product_images": [
                            {
                                "id": 98,
                                "created_by": 785,
                                "product_id": 2200,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2200/98/16986538135215439.jpg"
                            },
                            {
                                "id": 97,
                                "created_by": 785,
                                "product_id": 2200,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2200/97/16986538107414216.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2199,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "Maza",
                        "category_ids": [
                            {
                                "id": 2545,
                                "product_id": 2199,
                                "category_id": 491,
                                "category_name": "cars"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 80000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "car",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest car",
                        "product_images": [
                            {
                                "id": 100,
                                "created_by": 785,
                                "product_id": 2199,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2199/100/16986538505368340.webp"
                            },
                            {
                                "id": 99,
                                "created_by": 785,
                                "product_id": 2199,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2199/99/16986538478366352.webp"
                            }
                        ],
                        "product_variant": []
                    },
                    {
                        "id": 2198,
                        "created_by": 785,
                        "business_id": 105,
                        "name": "GTR ",
                        "category_ids": [
                            {
                                "id": 2544,
                                "product_id": 2198,
                                "category_id": 491,
                                "category_name": "cars"
                            }
                        ],
                        "selling_price": 100000,
                        "purchase_price": 80000,
                        "mrp": 100000,
                        "discount": 0,
                        "unit_id": 0,
                        "unit_name": null,
                        "unit_code": null,
                        "tax_id": 0,
                        "hsn_code": null,
                        "tax_rate": null,
                        "barcode_number": "car",
                        "status": "Active",
                        "cast_id": 0,
                        "cast_name": null,
                        "description": "fastest car",
                        "product_images": [
                            {
                                "id": 102,
                                "created_by": 785,
                                "product_id": 2198,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2198/102/16986538698595823.webp"
                            },
                            {
                                "id": 101,
                                "created_by": 785,
                                "product_id": 2198,
                                "image": "https://ik.imagekit.io/praveenarbs/api-images/product/2198/101/16986538664405851.jpg"
                            }
                        ],
                        "product_variant": []
                    }
                ]
            }
        ]
    },
    "status": true,
    "msg": "list available."
}*/