const rupiah = (number) => {
    return `Rp ${new Intl.NumberFormat("id-ID", {
        //   style: "currency",
        currency: "IDR"
    }).format(number)}`;
}

export default rupiah