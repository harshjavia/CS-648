/* eslint linebreak-style: ["error","windows"] */
import React from 'react';
import {
  Button, Tooltip,
  Glyphicon, OverlayTrigger,
  Table,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter,Link } from 'react-router-dom';

const deleteTooltip = (
  <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
);

const editTooltip = (
  <Tooltip id="edit-tooltip" placement="top">Edit Product</Tooltip>
);

const viewTooltip = (
  <Tooltip id="view-tooltip" placement="top">View Product</Tooltip>
);

const ProductRow = withRouter(({ product, deleteProduct, index }) => (
  <tr>
    <td>{product.Name}</td>
    <td>
      $
      {product.Price}
    </td>
    <td>{product.Category}</td>
    <td>
      <Link to={`/img/${product.Image}`}>
        view
      </Link>
    </td>
    <td>
      <LinkContainer to={`/edit/${product.id}`}>
        <OverlayTrigger delayShow={1000} overlay={editTooltip}>
          <Button bsStyle="danger">
            <Glyphicon glyph="edit" />
          </Button>
        </OverlayTrigger>
      </LinkContainer>
    </td>
    <td>
      <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
        <Button bsStyle="danger" type="button" onClick={() => { deleteProduct(index); }}>
          <Glyphicon glyph="trash" />
        </Button>
      </OverlayTrigger>
    </td>
  </tr>
));

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}
