"use client";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import CreateModal from "../form/create.modal";
import EditModal from "../form/edit.modal";
import Link from "next/link";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  blogs: IBlog[];
}

const ContainerHome = (props: IProps) => {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalState, setShowModalState] = useState<boolean>(false);
  const [editModalState, setEditModalState] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    if (confirm(`Do you want delete this blog id ${id}`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.info("Delete blog success!");
            mutate("http://localhost:8000/blogs");
          } else {
            toast.error("Error!");
          }
        });
    }
  };

  return (
    <>
      <div
        className="mb-3 mt-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Name Table</h3>
        <Button variant="success" onClick={() => setShowModalState(true)}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link href={`/blogs/${item.id}`} className="btn btn-primary">
                    View
                  </Link>

                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setEditModalState(true);
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalState={showModalState}
        setShowModalState={setShowModalState}
      />
      <EditModal
        editModalState={editModalState}
        setEditModalState={setEditModalState}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
};

export default ContainerHome;
