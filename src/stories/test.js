import React, { useEffect, useState } from "react";
import {Badge, Button, Icon, Leaders, LeadersItem, List, ListItem, Modal} from "@csg_actuarial/csg-design";
import { States, Limits, TypeListingProps } from "./types";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const CarrierProducts = ({ product, id, onClickDelete }: TypeListingProps) => {
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const handleModal = () => setShowDeleteModal(!showDeleteModal);
    const [productName, setProductName] = useState<string>(product.name);
    const val = "Are you sure you want to delete ";
    const saveModal = () => {
        onClickDelete(product);
        setShowDeleteModal(false);
    };

    useEffect(() => {
        setProductName(val + product.name + "?");
    }, [product]);

    return (
        <>
            <div className="list-group-item p-0 d-flex" key={id.toString()}>
                <div className="bg-info d-flex align-items-center px-2">
                    <Icon
                        iconColor="text-white"
                        iconName="fa-box"
                        iconSize="fa-2x"
                        iconStyle="fas"
                        isFixedWidth
                    />
                </div>
                <div className="flex-fill p-2">
                    <div className="d-flex align-items-center">
                        <h6 className="flex-fill mb-0">{product.name}</h6>
                        <div className="text-right">
                            <Button
                                btnSize="btn-sm"
                                btnStyle="csg-primary-ghost"
                                btnTitle="Edit"
                                onClick={() =>
                                    navigate("../product/edit", {
                                        state: { product },
                                    })
                                }
                            >
                                <Icon
                                    iconName="fa-pen"
                                    iconStyle="fas"
                                    isFixedWidth
                                />
                            </Button>
                            <Button
                                btnSize="btn-sm"
                                btnStyle="csg-primary-ghost"
                                btnTitle="Duplicate"
                                onClick={() =>
                                    navigate("../product/create", {
                                        state: { product },
                                    })
                                }
                            >
                                <Icon
                                    iconName="fa-clone"
                                    iconStyle="fas"
                                    isFixedWidth
                                />
                            </Button>
                            <Button
                                btnSize="btn-sm"
                                btnStyle="csg-danger-ghost"
                                btnTitle="Delete"
                                onClick={handleModal}
                            >
                                <Icon
                                    iconName="fa-trash"
                                    iconStyle="fas"
                                    isFixedWidth
                                />
                            </Button>
                        </div>
                    </div>
                    <div className="row mb-2 pl-3">
                        <div className="col-lg-8 small">
                            <Row>
                                <span className="pr-2">{product.type}</span>
                                {product.us_states &&
                                    product.us_states.map(
                                        (value: States, index) => (
                                            <>
                                                <Badge badgeType="badge-primary" key={index.toString()}>
                                                    {value.us_state}
                                                </Badge>
                                                <span> &nbsp; </span>
                                            </>
                                        )
                                    )}
                            </Row>

                            <Leaders leadersType="dotted">
                            {product.limits &&
                                    product.limits.map(
                                        (value: Limits, index) => (
                                        <LeadersItem
                                          leaderLabel='{1000} - {$10000}'
                                          leaderData='${1000} - {$10000}'
                                         />
                                        )
                                    )}
                            </Leaders>

                        </div>
                        <div
                            className="col-lg-4 small text-right"
                            data-testid={"product-" + product.id}
                        >
                            <div>
                                Effective - {product.effective_date}
                                <br />
                                Expires - {product.expiration_date}
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    <Modal
                        isModalOpen={showDeleteModal}
                        isModalCentered
                        isModalScrollable
                        modalID="test-modal"
                        modalTitle="Delete Product"
                        modalWidth=""
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Product</h5>
                            <Button btnClass="close">
                                <span aria-hidden="true" onClick={handleModal}>
                                    ×
                                </span>
                            </Button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">{productName}</p>
                        </div>
                        <div className="modal-footer">
                            <Button
                                btnStyle="btn-secondary"
                                onClick={handleModal}
                            >
                                Cancel
                            </Button>
                            <Button btnStyle="btn-primary" onClick={saveModal}>
                                Delete
                            </Button>
                        </div>
                    </Modal>
                </>
            </div>
        </>
    );
};

export default CarrierProducts;