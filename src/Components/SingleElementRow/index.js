import React from "react";

export default function SingleElementRow({
  heading,
  imgLink,
  className,
  value,
}) {
  return (
    <tr>
      <td className="heading">
        <h3> {heading} </h3>
      </td>

      <td className="description" id="img-text">
        {imgLink ? (
          <img className={className} src={imgLink} width="20" height="20" />
        ) : null}

        <p className="right-cell-description"> {value}</p>
      </td>
    </tr>
  );
}
