package demo.socio.result;

public class ResultDO {

	private String result;

	public ResultDO(String response) {
		super();
		this.result = response;
	}

	public String getResponse() {
		return result;
	}

	public void setResponse(String response) {
		this.result = response;
	}

}
