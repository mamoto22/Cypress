describe('Api Adopet', () => {
    
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MDI4NDVkMC0wYjFkLTQ5ODItODRkZi0xNWQ5NGM5OTNiNGMiLCJhZG9wdGVyTmFtZSI6Ik1hcmpvcmllIEFub3F1ZXZlbSIsImlhdCI6MTc0NDExODA1MCwiZXhwIjoxNzQ0Mzc3MjUwfQ.LEDWx0lsfEAND_W9JCdBM1G0xOqJGOBDmzkdEzHbzeg`
    it('Mensagens da API', ()=>{
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/702845d0-0b1d-4982-84df-15d94c993b4c',
            headers:{ authorization}
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            
        })
    })
})