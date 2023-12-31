import React from 'react';
import Contact from "./Contact";

const ContactList = ({ data, currentPage, getAllContacts }) => {
    return (
        <main className="main">
            {data?.content?.length === 0 && <div>No Contacts. Please add a new contact</div>}

            {data?.content?.length > 0 && (
                <ul className="contact__list">
                    {data.content.map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                    ))}
                </ul>
            )}

            {data?.content?.length > 0 && data?.totalPages > 1 && (
                <div className="pagination">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        onClick={() => getAllContacts(currentPage - 1)}
                        className={currentPage === 0 ? 'disabled' : ''}
                    >
                        &laquo;
                    </a>

                    {data &&
                        [...Array(data.totalPages).keys()].map((page, index) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                onClick={() => getAllContacts(page)}
                                className={currentPage === page ? 'active' : ''}
                                key={page}
                            >
                                {page + 1}
                            </a>
                        ))}

                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        onClick={() => getAllContacts(currentPage + 1)}
                        className={data.totalPages === currentPage + 1 ? 'disabled' : ''}
                    >
                        &raquo;
                    </a>
                </div>
            )}
        </main>
    );
};

export default ContactList;