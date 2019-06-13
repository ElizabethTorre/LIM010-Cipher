describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG')
    });
    it('debería retornar "ovsh" para "hola" con offset 33', ()=>{
      assert.equal(cipher.encode(33,'hola'),'ovsh')
    });
    it('debería retornar "10 Ñ" para "10 Ñ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,'10 Ñ'),'10 Ñ')
    });
    it('debería retornar "vwxy" para "abcd" con offset -5', ()=>{
      assert.equal(cipher.encode(-5,'abcd'),'vwxy')
    });
    it('debería retornar "VWXY" para "ABCD" con offset -5', ()=>{
      assert.equal(cipher.encode(-5,'ABCD'),'VWXY')
    });
    it('debería retornar "10 Ñ" para "10 Ñ" con offset -5', ()=>{
      assert.equal(cipher.encode(-5,'10 Ñ'),'10 Ñ')
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });
    it('debería retornar "hola" para "ovsh" con offset 33', ()=>{
      assert.equal(cipher.decode(33,'ovsh'),'hola')
    });
    it('debería retornar "1O Ñ" para "1O Ñ" con offset 33', ()=>{
      assert.equal(cipher.decode(33,'10 Ñ'),'10 Ñ')
    });
    it('debería retornar "fghi" para "abcd" con offset -5', ()=>{
      assert.equal(cipher.decode(-5,'abcd'),'fghi')
    });
    it('debería retornar "FGHI" para "ABCD" con offset -5', ()=>{
      assert.equal(cipher.decode(-5,'ABCD'),'FGHI')
    });
    it('debería retornar "1O Ñ" para "1O Ñ" con offset -5', ()=>{
      assert.equal(cipher.decode(-5,'10 Ñ'),'10 Ñ')
    });
  });

});
